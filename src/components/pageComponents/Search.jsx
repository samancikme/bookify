import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { BsSearch } from 'react-icons/bs';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Search = () => {
    const [typeAct, setTypeAct] = useState(false);
    const [dateAct, setDateAct] = useState(false);
    const [adultsAct, setAdultsAct] = useState(false);

    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const [selectedDates, setSelectedDates] = useState({
        startDate: "Add dates",
        endDate: "Add dates",
    });

    const handleChange = (ranges) => {
        const { startDate, endDate } = ranges.selection;
        setDate({ startDate, endDate, key: 'selection' });
        setSelectedDates({
            startDate: startDate.toDateString().slice(4, 10),
            endDate: endDate.toDateString().slice(4, 10),
        });
    };

    const handleSaveDates = () => {
        setDateAct(false);
    };

    const countryTypes = [
        { name: "Almaty", description: "Any week", image: "/path/to/almaty.jpg" },
        { name: "Tbilisi", description: "Any week", image: "/path/to/tbilisi.jpg" },
        { name: "İstanbul", description: "Any week", image: "/path/to/istanbul.jpg" },
        { name: "Jaipur, India", description: "For sights like Amber Fort", image: "/path/to/jaipur.jpg" },
        { name: "Manali, India", description: "For nature-lovers", image: "/path/to/manali.jpg" },
        { name: "New Delhi, India", description: "For its stunning architecture", image: "/path/to/delhi.jpg" },
    ];

    const handleToggle = (setter) => {
        setTypeAct(false);
        setDateAct(false);
        setAdultsAct(false);
        setter(true);
    };

    return (
        <>
            <form className="lg:w-[60%] md:w-[90%] sm:w-[95%] sm:flex rounded-full bg-black bg-opacity-15 backdrop:blur-xl mx-auto relative hidden justify-between items-center p-[3px]">
                <div className="flex justify-start pl-6 items-center gap-2 hover:bg-[#999999] rounded-full flex-[2]">
                    <div
                        onClick={() => handleToggle(setTypeAct)}
                        className="justify-center items-center cursor-pointer py-2"
                    >
                        <div className="flex flex-col gap-0">
                            <span className="text-[15px] font-medium">Where</span>
                            <span className="text-[12px] text-gray-200 font-medium">Search destinations</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 flex-1 hover:bg-[#999999] rounded-full">
                    <div
                        onClick={() => handleToggle(setDateAct)}
                        className="flex justify-center items-center cursor-pointer py-2"
                    >
                        <div className="flex flex-col gap-0">
                            <span className="text-[15px] font-medium">Check in</span>
                            <span className="text-[12px] text-gray-200 font-medium">{selectedDates.startDate}</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 flex-1 hover:bg-[#999999] rounded-full">
                    <div
                        onClick={() => handleToggle(setDateAct)}
                        className="flex justify-center items-center cursor-pointer py-2"
                    >
                        <div className="flex flex-col gap-0">
                            <span className="text-[15px] font-medium">Check out</span>
                            <span className="text-[12px] text-gray-200 font-medium">{selectedDates.endDate}</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start pl-6 items-center gap-2 flex-[2] hover:bg-[#999999] rounded-full">
                    <div
                        onClick={() => handleToggle(setAdultsAct)}
                        className="flex justify-center items-center cursor-pointer py-2"
                    >
                        <div className="flex flex-col gap-0">
                            <span className="text-[15px] font-medium">Who</span>
                            <span className="text-[12px] text-gray-200 font-medium">Add guests</span>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 bottom-0">
                    <button
                        type="button"
                        onClick={handleSaveDates}
                        className="py-3 w-full h-full pr-7">
                        <BsSearch />
                    </button>
                </div>

                {dateAct && (
                    <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 z-10 max-w-full flex justify-center">
                        <DateRange
                            ranges={[date]}
                            onChange={handleChange}
                            months={2}
                            direction="horizontal"
                            showMonthAndYearPickers={false}
                            className="dateRange"/>
                        <button onClick={handleSaveDates} className="mt-2 bg-green-500 text-white py-1 px-3 rounded">
                            Save Dates
                        </button>
                    </div>
                )}
                {typeAct && (
                    <div className="absolute top-[60px] z-10 max-w-full flex justify-center">
                        <div className="w-64 p-4 bg-white shadow-lg rounded-lg">
                            {countryTypes.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 py-2">
                                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="font-medium text-black">{item.name}</p>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </form>
        </>
    );
}

export default Search;
