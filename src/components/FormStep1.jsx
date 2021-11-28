import React from 'react';
import { useState, useEffect} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function FormStep1(props) {
    const [diastoleAvg, setDiastoleAvg] = useState(0.0);
    const [systoleAvg, setSystoleAvg] = useState(0.0);
    const [bpmAvg, setBpmAvg] = useState(0.0);
    const [cases, setCases] = useState(0);

    useEffect(() => {
        let diasAvg = 0;
        let sysAvg = 0;
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
                diasAvg = (diastoleTotals / diastoleCounts)
                sysAvg = (systoleTotals / systoleCounts)
                setDiastoleAvg(diastoleTotals / diastoleCounts);
                setSystoleAvg(systoleTotals / systoleCounts);
                setBpmAvg(bpmTotals / bpmCounts);
            }
        }
        function displayedCase() {
            if(sysAvg <= 120 && diasAvg <= 80) {
                setCases(1);
                return;
            }
            else if(sysAvg > 120 && diasAvg > 80 && sysAvg <= 135 && diasAvg <= 85) {
                setCases(2);
                return;
            }
            else if(sysAvg > 135 || diasAvg > 85) {
                setCases(3);
                return;
            }
            else if((isNaN(sysAvg) || isNaN(diasAvg) )) {
                setCases(4);
            }
            else {
                setCases(1);
                return;
            }

        }
        calculateTotals();
        displayedCase();
    }, [props.data, props.step])

    useEffect(() => {

    }, [cases])

    if(props.step === 1) {
        return (
            <div>
                <h2>Voici vos moyennes</h2>
                <div className="avg">
                    <span className="avg">Moyenne de votre taux de systole en mmHg: {isNaN(systoleAvg) ? "Indisponible" : systoleAvg.toString()}</span> <br/>
                </div>
                <div className="avg">
                    <span className="avg">Moyenne de votre taux de diastole en mmHg: {isNaN(diastoleAvg) ? "Indisponible" : diastoleAvg.toString()}</span> <br/>
                </div>
                <div>
                    <span className="avg">Moyenne de votre battements de coeur par minute: {isNaN(bpmAvg) ? "Indisponible" : bpmAvg.toString()}</span>
                </div>
            </div>
        )
    }
    if(props.step === 3) {
        return (
            <div>
                {props.isLoading && (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                )}
                { cases === 1 && !props.isLoading && (
                    <div>
                        <h2 className="good-result">Vos valeurs de tensions sont belles! Continuez vos efforts.</h2>
                        <span className="question">
                            Peur que vos résultats soient trop bas? {" "}
                            <span className="result">
                                L'hypertension n'est pas un problème médical en tant que tel, tant que vous n'êtes pas symptomatique. Si vous ressentez de la fatigue, des étourdissements, de la nausée ou des faiblesses en général, consultez votre pharmacien.
                            </span>
                        </span>   
                    </div>
                )}
                { cases === 2 && !props.isLoading && (
                    <div>
                        <h2 className="good-result">Vos valeurs de tensions sont belles! Continuez vos efforts.</h2>
                        <div className="result-box">
                            <span className="question">
                                Mais attention! {" "}
                                    <span className="result">
                                        Il se peut que, selon votre condition de santé ou votre âge, vos cibles soient plus basses. À ce moment, référez-vous aux cibles données par votre professionnel de la santé. Si les valeurs sont plus hautes que ces cibles, contactez votre pharmacien.
                                    </span>
                            </span>   
                        </div>
                    </div>
                )}
                { (cases === 3) && !props.isLoading && (
                    <div>
                        <h2 className="bad-result">Attention! Vos valeurs sont élevées. Consultez votre pharmacien.</h2>  
                    </div>
                )}
                { (cases === 4) && !props.isLoading && (
                    <div>
                        <h2>Uh oh...</h2>
                        <span className="result">Il me manque des informations pour pouvoir établir des recommandations. Veuillez réessayer avec des données valides.</span>
                    </div>
                )}
            </div>
        )
    }
    if(props.step === 2) {
        return (
            <div className="disclaimer">
                <span className="disclaimer-text">Les résultats suivants ne remplacent jamais le jugement d'un professionnel de la santé. Si une anomalie dans les données est détectée, contactez votre pharmacien. Les cibles thérapeutiques peuvent ne pas être adéquates selon votre condition de santé ou votre âge. Consultez votre pharmacien si le cas échéant.</span>
            </div>
    )
    }
    else {
        return null;
    }
}
