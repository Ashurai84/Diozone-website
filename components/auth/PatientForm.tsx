import React, { useState } from 'react';
import { Activity, Droplets, Scale } from 'lucide-react';

interface PatientFormProps {
  onSubmit: () => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    diabetesType: '',
    diagnosisYear: '',
    medication: '',
    hba1c: '',
    fastingSugar: '',
    weight: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Patient Information
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Help us provide better care by sharing your details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
                Personal Details
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#29524A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#29524A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#29524A] focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Diabetes Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
                Diabetes Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300">Type of Diabetes</label>
                <select
                  name="diabetesType"
                  value={formData.diabetesType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#29524A] focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="gestational">Gestational</option>
                  <option value="prediabetes">Pre-diabetes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Diagnosis Year</label>
                <input
                  type="number"
                  name="diagnosisYear"
                  value={formData.diagnosisYear}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#29524A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Current Medication</label>
                <input
                  type="text"
                  name="medication"
                  value={formData.medication}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-700 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#29524A] focus:border-transparent"
                  placeholder="e.g., Insulin, Metformin"
                />
              </div>
            </div>
          </div>

          {/* Health Metrics */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
              Health Metrics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-gray-700 p-4 rounded-lg">
                <Activity className="h-5 w-5 text-[#29524A]" />
                <div>
                  <label className="block text-sm font-medium text-gray-300">Latest HbA1c</label>
                  <input
                    type="number"
                    step="0.1"
                    name="hba1c"
                    value={formData.hba1c}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-transparent border-0 border-b border-gray-600 text-gray-200 focus:ring-0 focus:border-[#29524A]"
                    placeholder="%" 
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 bg-gray-700 p-4 rounded-lg">
                <Droplets className="h-5 w-5 text-[#29524A]" />
                <div>
                  <label className="block text-sm font-medium text-gray-300">Fasting Sugar</label>
                  <input
                    type="number"
                    name="fastingSugar"
                    value={formData.fastingSugar}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-transparent border-0 border-b border-gray-600 text-gray-200 focus:ring-0 focus:border-[#29524A]"
                    placeholder="mg/dL"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 bg-gray-700 p-4 rounded-lg">
                <Scale className="h-5 w-5 text-[#29524A]" />
                <div>
                  <label className="block text-sm font-medium text-gray-300">Weight</label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full bg-transparent border-0 border-b border-gray-600 text-gray-200 focus:ring-0 focus:border-[#29524A]"
                    placeholder="kg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#29524A] hover:bg-[#1f3d37] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#29524A]"
            >
              Save Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;