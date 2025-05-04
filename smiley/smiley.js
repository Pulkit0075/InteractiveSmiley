document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {

        //leftB

        let xLB = 785 + (-(960 - event.clientX)/11);
        let yLB = 405 + (-(540 - event.clientY)/11);
        
        var toTranslate = "translate(" + xLB + "px," + yLB + "px)";

        
        const leftBTranslate = [
            { },
            { transform: toTranslate },
            {transform: "translate(785px,405px)"}
          ];
          
        const leftBTiming = {
            duration: 1000,
            iterations: 1,
        };

        const leftB = document.querySelector("#leftB");
        leftB.animate(leftBTranslate, leftBTiming);

        //rightB

        let xRB = 1085 + (-(960 - event.clientX)/11);
        let yRB = 405 + (-(540 - event.clientY)/11);
        
        var toTranslate = "translate(" + xRB + "px," + yRB + "px)";

        
        const rightBTranslate = [
            { },
            { transform: toTranslate },
            {transform: "translate(1085px,405px)"}
          ];
          
        const rightBTiming = {
            duration: 1000,
            iterations: 1,
        };

        const rightB = document.querySelector("#rightB");
        rightB.animate(rightBTranslate, rightBTiming);

        //leftG

        let xLG = 762 + (-(960 - event.clientX)/14);
        let yLG = 375 + (-(540 - event.clientY)/14);
        
        var toTranslate = "translate(" + xLG + "px," + yLG + "px)";

        
        const leftGTranslate = [
            {},
            { transform: toTranslate },
            {transform: "translate(762px,375px)"}
          ];
          
        const leftGTiming = {
            duration: 1000,
            iterations: 1,
        };

        const leftG = document.querySelector("#leftG");
        leftG.animate(leftGTranslate, leftGTiming);



        //rightG

        let xRG = 1060 + (-(960 - event.clientX)/14);
        let yRG = 375 + (-(540 - event.clientY)/14);
        
        var toTranslate = "translate(" + xRG + "px," + yRG + "px)";

        
        const rightGTranslate = [
            {},
            { transform: toTranslate },
            {transform: "translate(1060px,375px)"}
          ];
          
        const rightGTiming = {
            duration: 1000,
            iterations: 1,
        };

        const rightG = document.querySelector("#rightG");
        rightG.animate(rightGTranslate, rightGTiming);


        //leftS

        let xLS = 60 + (-(960 - event.clientX)/25);
        let yLS = 100 + (-(540 - event.clientY)/25);
        
        var toTranslate = "translate(" + xLS + "px," + yLS + "px)";

        
        const leftSTranslate = [
            {},
            { transform: toTranslate },
            {transform: "translate(60px,100px)"}
          ];
          
        const leftSTiming = {
            duration: 1000,
            iterations: 1,
        };

        const leftS = document.querySelector("#leftS");
        leftS.animate(leftSTranslate, leftSTiming);



        //rightS

        let xRS = 360 + (-(960 - event.clientX)/25);
        let yRS = 100 + (-(540 - event.clientY)/25);
        
        var toTranslate = "translate(" + xRS + "px," + yRS + "px)";

        
        const rightSTranslate = [
            {},
            { transform: toTranslate },
            {transform: "translate(360px,100px)"}
          ];
          
        const rightSTiming = {
            duration: 1000,
            iterations: 1,
        };

        const rightS = document.querySelector("#rightS");
        rightS.animate(rightSTranslate, rightSTiming);


        //mouth

        let xM = 850 + (-(960 - event.clientX)/25);
        let yM = 605 + (-(540 - event.clientY)/25);
        
        var toTranslate = "translate(" + xM + "px," + yM + "px)";

        
        const mouthTranslate = [
            {},
            { transform: toTranslate },
            {transform: "translate(850px,605px)"}
          ];
          
        const mouthTiming = {
            duration: 1000,
            iterations: 1,
        };

        const mouth = document.querySelector(".mouth");
        mouth.animate(mouthTranslate, mouthTiming);

        //base2


        let xB =  (-(960 - event.clientX)/50);
        let yB =  (-(540 - event.clientY)/50);
        
        var toTranslate = "translate(" + xB + "px," + yB + "px)";

        
        const baseTranslate = [
            {},
            { transform: toTranslate },
            {transform: "translate(0px,0px)"}
          ];
          
        const baseTiming = {
            duration: 1000,
            iterations: 1,
        };

        const base = document.querySelector("#base");
        base.animate(baseTranslate, baseTiming);
    }