import path from "path";
import prisma from "../prisma";
import fs from "fs";

export const checkUsageInfo = async (userId: string, moduleTierId: string) => {
  // Check if the user has reached the usage limit
  const usage = await prisma.moduleUsage.findFirst({
    where: {
      userId,
      moduleTierId,
    },
    include: {
      moduleTier: {
        include: {
          module: {
            include: {
              tiers: true,
            },
          },
        },
      },
    },
  });

  return usage;
};

export const moduleUsageTrackerInjection = async (
  filePath: string,
  textProductionId: string,
  mapId: string | undefined,
  conclutionId: string | undefined,
  moduleTierId: string,
  apiBaseUrl: string,
) => {
  try {
    console.log("Starting moduleUsageTrackerInjection...");

    // Inject the usage tracking script
    const script = `
    <script>
  function getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const userId = getQueryParam("user_id");
    const moduleTierId = "${moduleTierId}";

    function trackUsage(actionType) {
      if (!userId) return;
      fetch("${apiBaseUrl}/api/modules/tiers/${moduleTierId}/usage", {
  method: "POST",
  headers: { "Content-Type": "application/json", "API_KEY": "${process.env.API_KEY}" },
  body: JSON.stringify({userId, actionType })
});

    }

    const textBtn = document.getElementById("${textProductionId}");
    const mapBtn = document.getElementById("${mapId}");
    const conclusionBtn = document.getElementById("${conclutionId}");

    if (textBtn) {
      textBtn.addEventListener("click", () => trackUsage("text"));
    }

    if (mapBtn) {
      mapBtn.addEventListener("click", () => trackUsage("map"));
    }

    if (conclusionBtn) {
      conclusionBtn.addEventListener("click", () => trackUsage("conclution"));
    }
  });
</script>`;

    const htmlPath = path.join(filePath, "index.html");

    let content = await fs.promises.readFile(htmlPath, "utf-8");

    console.log({
      message: "File read successfully",
      htmlPath: htmlPath,
      content: content,
    });

    // Inject before </body>
    if (content.includes("</body>")) {
      content = content.replace("</body>", `${script}</body>`);
    } else {
      content += script;
    }

    await fs.promises.writeFile(htmlPath, content, "utf-8");
  } catch (error) {
    console.log(error);
    return;
  }
};
