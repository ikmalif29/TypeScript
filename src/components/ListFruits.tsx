import { useState } from "react";

type Fruit = {
    id: number;
    name: string;
    color: string;
    taste: string;
    season: string;
    origin: string;
    img: string;
};

type ListFruitsName = {
    listFruits: Fruit[];
};

export const ListFruits = (fruits: ListFruitsName) => {
    const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);

    return (
        <div className="relative">
            <div className="flex flex-wrap gap-8 justify-center py-8 bg-gradient-to-r from-green-100 via-yellow-100 to-red-100">
                {fruits.listFruits.map((f) => (
                    <div
                        key={f.id}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                    >
                        <img
                            src={f.img}
                            alt={f.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                                {f.name}
                            </h1>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Color:</span> {f.color}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Taste:</span> {f.taste}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Season:</span> {f.season}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Origin:</span> {f.origin}
                                </p>
                            </div>
                            <button
                                className="mt-4 w-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 text-white font-semibold py-2 rounded-lg hover:opacity-90"
                                onClick={() => setSelectedFruit(f)}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup */}
            {selectedFruit && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[90%] max-w-md shadow-lg">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                            onClick={() => setSelectedFruit(null)}
                        >
                            ✖
                        </button>
                        <img
                            src={selectedFruit.img}
                            alt={selectedFruit.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {selectedFruit.name}
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Color:</span> {selectedFruit.color}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Taste:</span> {selectedFruit.taste}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Season:</span> {selectedFruit.season}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <span className="font-semibold">Origin:</span> {selectedFruit.origin}
                        </p>
                        <button
                            className="w-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 text-white font-semibold py-2 rounded-lg hover:opacity-90"
                            onClick={() => setSelectedFruit(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
