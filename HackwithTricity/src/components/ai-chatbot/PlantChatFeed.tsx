interface PlantChatFeedProps {
  reply: string;
}

interface PlantData {
  botanicalName?: string;
  name?: string;
  category?: string;
  description?: string;
  careInstructions?: string;
  lightRequirement?: string;
  origin?: string;
  propagation?: string;
  soil?: string;
  temperature?: string;
  uses?: string;
  wateringNeeds?: string;
}

const formatPlantReply = (data: PlantData) => {
  let parts: string[] = [];

  if (data.name) {
    parts.push(
      `🌿 This is **${data.name}**${
        data.botanicalName ? ` (${data.botanicalName})` : ""
      }.`
    );
  }
  if (data.description) {
    parts.push(data.description);
  }
  if (data.origin) {
    parts.push(`It originates from ${data.origin}.`);
  }
  if (data.category) {
    parts.push(`It belongs to the category: ${data.category}.`);
  }
  if (data.lightRequirement) {
    parts.push(`☀️ Light needs: ${data.lightRequirement}`);
  }
  if (data.soil) {
    parts.push(`🌱 Soil preference: ${data.soil}`);
  }
  if (data.temperature) {
    parts.push(`🌡️ Ideal temperature: ${data.temperature}`);
  }
  if (data.wateringNeeds) {
    parts.push(`💧 Watering needs: ${data.wateringNeeds}`);
  }
  if (data.propagation) {
    parts.push(`🌾 Can be propagated by: ${data.propagation}`);
  }
  if (data.uses) {
    parts.push(`📌 Common uses: ${data.uses}`);
  }
  if (data.careInstructions) {
    parts.push(`🪴 Care tip: ${data.careInstructions}`);
  }

  return parts.join("\n\n");
};

const BotMessage = ({ content }: { content: string }) => (
  <div className="flex items-start space-x-3 max-w-[50%] my-2">
    <div className="flex-shrink-0 text-xl">🌱</div>
    <div className="bg-[#edf1e4] text-green-900 px-4 py-3 rounded-2xl rounded-tl-md shadow-sm w-full">
      {content.split("\n").map((line, idx) => (
        <p
          key={idx}
          className="text-sm leading-relaxed mb-2"
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      ))}
    </div>
  </div>
);

const PlantChatFeed = ({ reply }: PlantChatFeedProps) => {
  let message = reply;

  try {
    const parsed: PlantData = JSON.parse(reply);
    message = formatPlantReply(parsed);
  } catch {
    message = reply.trim();
  }

  return (
    <div className="w-full h-full flex flex-col p-6">
      {reply.length > 0 ? (
        <BotMessage content={message} />
      ) : (
        <BotMessage content="Hello! I'm your plant care assistant 🌿 How can I help you with your green friends today?" />
      )}
    </div>
  );
};

export default PlantChatFeed;
