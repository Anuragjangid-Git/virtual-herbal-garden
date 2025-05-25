import axios from "axios";
import { Send, Bot, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function PlantAssistant() {
  const [plantName, setPlantName] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");

  const handleGenerate = async () => {
    if (!plantName) {
      alert("Please enter a query");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/response/generating",
        {
          plantName: plantName,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      console.error(error);
    }
    finally {
      setPlantName("");
    }
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-green-600 p-6">
              <div className="flex items-center gap-3">
                <Bot className="h-8 w-8 text-white" />
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    Plant Assistant
                  </h1>
                  <p className="text-green-100">
                    Ask me anything about medicinal plants
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[500px] overflow-y-auto p-6">
              <div className="prose prose-green max-w-none">
                <ReactMarkdown>{generatedReply}</ReactMarkdown>
              </div>
            </div>

            {/* Input */}

            <div className="flex gap-4 p-6 border-t">
              <input
                value={plantName}
                onChange={(e) => setPlantName(e.target.value)}
                type="text"
                placeholder="Ask about any plant..."
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={handleGenerate}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantAssistant;
