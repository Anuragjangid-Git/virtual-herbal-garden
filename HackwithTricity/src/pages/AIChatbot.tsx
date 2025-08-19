import React, { useMemo, useState } from "react";
import { Send, Leaf, Home } from "lucide-react";
import { Button } from "../components/ui/Button";
import axios from "axios";
import PlantChatFeed from "../components/ai-chatbot/PlantChatFeed";
import Loader from "../components/ui/Loader";
import { Link } from "react-router-dom";
import { addToCollection, checkPlantExists } from "../api/firestoreApi";
import { getCurrentUser } from "../api/firestoreApi";
import { toast } from "react-toastify";
interface User {
  name?: string;
  email?: string;
  location?: string;
  joinedDate?: string;
  userId: string;
}

const AIChatbot: React.FC = () => {
  const [plantName, setPlantName] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [plantData, setPlantData] = useState<Record<string, any> | null>(null);
  const [currentUser, setCurrentUser] = useState<User>({ userId: "" });

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, [currentUser]);

  const handleGenerate = async () => {
    if (!plantName) {
      alert("Please enter a query");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/response/generating",
        { plantName }
      );

      let replyString = response.data;
      let replyObject: Record<string, any> | null = null;

      if (typeof replyString === "string") {
        const lines = replyString.split("\n");
        replyObject = {};
        lines.forEach((line) => {
          const [key, ...rest] = line.split(":");
          if (key && rest.length > 0 && replyObject) {
            replyObject[key.trim()] = rest.join(":").trim();
          }
        });
      } else if (typeof response.data === "object") {
        replyObject = response.data;
      }

      setGeneratedReply(replyString);
      setPlantData(replyObject);
    } catch (error) {
      console.error("Error generating plant info:", error);
    } finally {
      setLoading(false);
      setPlantName("");
    }
  };

  const handleSaveToFirestore = async () => {
    if (!plantData) {
      alert("No plant data to save.");
      return;
    }
    if (!currentUser) {
      alert("User  not found. Please log in.");
      return;
    }
    const exists = await checkPlantExists(currentUser.userId, plantData.name);

    if (exists) {
      toast.info("This plant is already in your collection 🌱");
      return;
    }

    await addToCollection(currentUser.userId, plantData);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-sage p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-herbal flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground animate-float" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              Herbal Assistant
            </h1>
            <p className="text-sm text-muted-foreground">
              Your guide to medicinal plants
            </p>
          </div>
          <div className="ml-auto flex items-center gap-4 mr-30px">
             <Link to="/">
                <p className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-red-500 transition-colors flex items-center gap-2">
                  <Home className="w-4 h-4 " />
                  Home
                </p>
              </Link>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="h-[500px] overflow-y-auto p-6">
          <div className="prose prose-green max-w-none">
            {loading ? (
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <PlantChatFeed reply={generatedReply} />
            )}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-gradient-sage p-4">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <input
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              disabled={loading}
              type="text"
              placeholder="Ask about any medicinal plant..."
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf text-foreground placeholder:text-muted-foreground"
            />
            <Leaf className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={handleGenerate}
              disabled={loading}
              className="bg-gradient-herbal text-primary-foreground hover:opacity-90 shadow-botanical px-6"
            >
              <Send className="w-4 h-4" />
            </Button>

            <Button
              onClick={handleSaveToFirestore}
              disabled={!plantData || loading}
              className="bg-green-600 text-white hover:bg-green-700 px-6"
            >
              Save
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center mt-2">
          Press Enter to send • Ask about herbs, benefits, or preparation
          methods
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
