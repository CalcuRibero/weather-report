const DateBox = () => {

    const dateBuilder = (d) => {
        let months = [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'];
        let days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ];

        let date = `${days[d.getDay()]}
                    ${d.getDate()}
                    ${months[d.getMonth()]}
                    ${d.getFullYear()}`;

        return date;
    }

    return (
        <div className="data date-data">
            <div className="data date-data">
                {dateBuilder(new Date())}
            </div>
        </div>
    )
}

export default DateBox;