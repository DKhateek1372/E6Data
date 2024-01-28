import './App.css';


function Inxeption(props) {
    const { data } = props;
    return (
    <div class="column">
                <div className="table">
                <div class="tooltip">{data.datasetid.charAt(0).toUpperCase() + data.datasetid.slice(1)}
                    <span class="tooltiptext">{data.recordid}</span>
                </div>
                    <div className="row">
                        <div className="cell" align="center">{'Date'}</div>
                        <div className="cell">{'Currency'}</div>
                        <div className="cell">{'Rate'}</div>
                    </div>
                    <div className="row">
                        <div className="cell">{data.fields.date}</div>
                        <div className="cell">{data.fields.currency}</div>
                        <div className="cell">{(data.fields.rate).toFixed(2)}</div>
                    </div>

                </div>
            </div>
    );
}

export default Inxeption;
