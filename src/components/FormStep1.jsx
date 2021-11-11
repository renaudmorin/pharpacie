import React from 'react';
import { useState, useEffect} from "react";


export default function FormStep1(props) {
    const [diastoleAvg, setDiastoleAvg] = useState(0.0);
    const [systoleAvg, setSystoleAvg] = useState(0.0);
    const [bpmAvg, setBpmAvg] = useState(0.0);



    useEffect(() => {
        function calculateTotals() {
            if(props.data) {
                let diastoleTotals = 0;
                let systoleTotals = 0;
                let bpmTotals = 0;
                let diastoleCounts = 0;
                let systoleCounts = 0;
                let bpmCounts = 0;
                props.data.map(element => {
                    if(element.diastoleMatin) {
                        diastoleTotals += element.diastoleMatin;
                        diastoleCounts += 1;
                    }
                    if(element.systoleMatin) {
                        systoleTotals += element.systoleMatin;
                        systoleCounts += 1;
                    }
                    if(element.bpmMatin) {
                        bpmTotals += element.bpmMatin;
                        bpmCounts += 1;
                    }
                    if(element.diastoleSoir) {
                        diastoleTotals += element.diastoleSoir;
                        diastoleCounts += 1;
                    }
                    if(element.systoleSoir) {
                        systoleTotals += element.systoleSoir;
                        systoleCounts += 1;
                    }
                    if(element.bpmSoir) {
                        bpmTotals += element.bpmSoir;
                        bpmCounts += 1;
                    }
                    return [];
                })
                setDiastoleAvg(diastoleTotals / diastoleCounts);
                setSystoleAvg(systoleTotals / systoleCounts);
                setBpmAvg(bpmTotals / bpmCounts);
            }
        }
        calculateTotals();

    }, [props.data])

    if(props.step === 1) {
        return (
            <div>
                <span>Moyenne diastole: {diastoleAvg.toString()}</span> <br/>
                <span>Moyenne systole: {systoleAvg.toString()}</span> <br/>
                <span>Moyenne bpm: {bpmAvg.toString()}</span>
            </div>
        )
    }
    else {
        return null;
    }
}
