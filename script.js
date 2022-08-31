class Stopwatch {
    constructor(callback, element){
        this.displayText = "00:00";
        this.seconds = 0;
        this.minutes = 0;
        this.watch = setInterval(() => {
            this.countUp();
            this.updateStopWatch();
            element.textContent = this.displayText;
            if (callback){
                callback();
            }
        }, 1000);
    }

    updateStopWatch(){
        let output = "";
        if (this.minutes < 10){
            output = `0${this.minutes}`;
        }else{
            output = `${this.minutes}`;
        }
        
        if (this.seconds < 10){
            output += `:0${this.seconds}`;
        }else{
            output += `:${this.seconds}`;
        }
    
        this.displayText = output;
    }

    countUp(){
        this.seconds++;
        if (this.seconds >= 60){
            this.minutes++;
            this.seconds = 0;
        }
    }

    getDisplayText(){
        return this.displayText;
    }

    remove(){
        clearInterval(this.watch);
    }
}

const stopWatchDisplay = document.querySelector("#stopwatch-text");

const watch = new Stopwatch(null, stopWatchDisplay);