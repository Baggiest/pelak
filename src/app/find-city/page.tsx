import CityCodeLookup from "@/components/city-lookup/CityCodeLookup";

export default function FindCity() {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-6">Find City Code</h1>
            <CityCodeLookup />
        </div>
    )
}