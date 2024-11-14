import React, { useState } from "react";
import Day from "../Day";
import './calendar.scss';
import '../../components/commons/CrayonLine';
import CrayonLine from "../../components/commons/CrayonLine";

function Calendar() {
    const [month, setMonth] = useState('January');
    const [year, setYear] = useState(new Date().getFullYear());
    const daysInMonth = new Date(year, new Date(`${month} 1`).getMonth() + 1, 0).getDate();

    const firstHalf = [...Array(Math.min(12, daysInMonth))].map((_, index) => index + 1);
    const secondHalf = [...Array(daysInMonth - firstHalf.length)].map((_, index) => index + firstHalf.length + 1);

    const monthImage = `/images/months/${month.slice(0, 3).toLowerCase()}.png`;

    const handleMonthChange = (direction) => {
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];
        const currentIndex = monthNames.indexOf(month);

        if (direction === 'previous') {
            setMonth(monthNames[(currentIndex - 1 + 12) % 12]);
            if(currentIndex === 0) {
                setYear(year - 1);
            }
        } else if (direction === 'next') {
            setMonth(monthNames[(currentIndex + 1) % 12]);
            if(currentIndex === 11) {
                setYear(year + 1);
            }
        }
    };

    return (
        <div className="calendar-notes-container">
            <div className="notes-section">
                <p>NOTES:</p>
                <div className="notes-lines">
                    <div className="other-pages-lines">
                        <CrayonLine lineCount={10} />
                    </div>
                </div>
            </div>
            <div className="calendar">
                <div className="calendar-container">                    
                    <div className="calendar-overlay">
                        <img src="/images/mushrooms-layers/MushroomLayer1.png" 
                        alt="mushroom layer" 
                        className="mushroom-layer1" 
                        />
                        <img src="/images/mushrooms-layers/MushroomLayer2.png"
                        alt="mushroom layer"
                        className="mushroom-layer2"
                        />
                        <img src="/images/mushrooms-layers/MushroomLayer8.png"
                        alt="mushroom layer"
                        className="mushroom-layer8" 
                        />
                        <img src="/images/mushrooms-layers/MushroomLayer3.png"
                        alt="mushroom layer"
                        className="mushroom-layer3" 
                        />
                        <img 
                            src="/images/calendar-frame.png" 
                            alt="calendar frame" 
                            className="frame" 
                        />
                        <img 
                            src="/images/calendar.png" 
                            alt="calendar" 
                            className="calendar-image" 
                        />
                    </div>

                    <div 
                        className="navigation previous" 
                        onClick={() => handleMonthChange('previous')}
                    />
                    <div 
                        className="navigation next" 
                        onClick={() => handleMonthChange('next')}
                    />

                    <div className="month-image-container">
                        <img 
                            src={monthImage} 
                            alt={`${month} illustration`} 
                            className="month-image" 
                        />
                    </div>

                    <div className="days-container">
                        <div className="days-part-left">
                            {firstHalf.map(day => (
                                <div key={day} className="day-container">
                                    <Day dayNumber={day} />
                                </div>
                            ))}
                        </div>
                        <div className="days-part-right">
                            {secondHalf.map(day => (
                                <div key={day} className="day-container">
                                    <Day dayNumber={day} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="other-pages-section">
                    <p>OTHER PAGES:</p>
                    <div className="other-pages-lines">
                        <CrayonLine lineCount={10} />
                    </div>
            </div>
        </div>
    );
}

export default Calendar;
