import { Leaf } from "lucide-react";
import { useState } from "react";
import { addToCollection } from "../api/firestoreApi";
interface AddToCollectionProps {
    onEdit: () => void;
    currentUser: {
        name?: string;
        email?: string;
        location?: string;
        joinedDate?: string;
        userId:string;
    };
}
const AddToCollection = ({ onEdit, currentUser }: AddToCollectionProps) => {
    console.log(currentUser);
    const [editInput, setEditInput] = useState<Record<string, string>>({});

    const getInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let { name, value } = event.target;
        let input = { [name]: value };
        setEditInput({ ...editInput, ...input });
    };
    const handleAdd = async() => {
        if (!editInput.name || !editInput.botanicalName) {
            alert("Please fill in the required fields.");
            return;
        }  
       await addToCollection(currentUser.userId, editInput);
        setEditInput({});
        onEdit();
    };

    return (

       
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Leaf className="h-8 w-8 text-green-600" />
                            <p className="text-3xl font-bold text-gray-900">Fill Plant Details Here</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="bg-green-600 text-white p-[5px] rounded-lg" onClick={handleAdd}>Add</button>
                            <button className="bg-red-600 text-white p-[5px] rounded-lg" onClick={onEdit}>
                                cancel
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
           <div className="bg-white rounded-xl shadow-lg p-6 " >
          
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Plant Name *</label>
      <input
        type="text"
        name="name"
        value={editInput.name || ""}
        onChange={getInput}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="Common name of the plant"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Botanical Name *</label>
      <input
        type="text"
        name="botanicalName"
        value={editInput.botanicalName || ""}
        onChange={getInput}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="Scientific name"
        required
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
    <textarea
      name="description"
      value={editInput.description || ""}
      onChange={getInput}
      rows={4}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      placeholder="Describe the plant's characteristics and features"
    />
  </div>

  {/* Growing Information */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[10px]">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
      <select
        name="category"
        value={editInput.category || ""}
        onChange={getInput}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        <option value="">Select a category</option>
        <option value="herb">Herb</option>
        <option value="shrub">Shrub</option>
        <option value="tree">Tree</option>
        <option value="climber">Climber</option>
        <option value="succulent">Succulent</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
      <input
        type="text"
        name="origin"
        value={editInput.origin || ""}
        onChange={getInput}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="Plant's native region"
      />
    </div>
  </div>

  {/* Growth Characteristics */} 
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[20px]">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Light Requirement</label>
      <select
        name="lightRequirement"
        value={editInput.lightRequirement || ""}
        onChange={getInput}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        <option value="">Select light level</option>
        <option value="full-sun">Full Sun</option>
        <option value="partial-sun">Partial Sun</option>
        <option value="shade">Shade</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Watering Needs</label>
      <select
        name="wateringNeeds"
        value={editInput.wateringNeeds || ""}
        onChange={getInput}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        <option value="">Select watering level</option>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Temperature Range</label>
      <input
        type="text"
        name="temperature"
        value={editInput.temperature || ""}
        onChange={getInput}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="e.g., 65-80°F"
      />
    </div>
  </div>

  {/* Additional Information */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[20px]">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Soil Requirements</label>
      <textarea
        name="soil"
        value={editInput.soil || ""}
        onChange={getInput}
        rows={3}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="Describe soil preferences"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Propagation Methods</label>
      <textarea
        name="propagation"
        value={editInput.propagation || ""}
        onChange={getInput}
        rows={3}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="How to propagate this plant"
      />
    </div>
  </div>

  {/* Uses and Care */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2 mt-[10px]">Uses</label>
    <textarea
      name="uses"
      value={editInput.uses || ""}
      onChange={getInput}
      rows={3}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      placeholder="Medicinal, ornamental, or other uses"
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2 mt-[10px]">Care Instructions</label>
    <textarea
      name="careInstructions"
      value={editInput.careInstructions || ""}
      onChange={getInput}
      rows={4}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      placeholder="Detailed care instructions and tips"
    />
  </div>
 
</div>


            {/* Basic Information */}
           
        </div>
    );
};

export default AddToCollection;
