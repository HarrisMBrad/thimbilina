// Reinforcement Learning Experiment for Multiple Days with Daily UI Rendering

class Agent {
    constructor() {
        this.reward = 0;
        this.state = "initial";
        logOutput("Agent initialized with state: initial");
    }

    action(environment) {
        logOutput("Agent performs an action");
        return "Next";  // Placeholder for next action/state
    }

    feedback(A, RW, nextState, knownRewards) {
        logOutput(`Agent received feedback: Action(${A}), Reward(${RW}), NextState(${nextState})`);
        logOutput(`Known rewards for validation: ${knownRewards}`);
        if (knownRewards.includes(RW)) {
            this.state = nextState;
            logOutput(`State updated to: ${this.state}`);
        } else {
            logOutput("State not updated due to mismatched reward");
        }
    }
}

class Environment {
    constructor() {
        this.state = "initial";
        logOutput("Environment initialized with state: initial");
    }

    interact(action) {
        logOutput(`Environment reacts to action: ${action}`);
        let reward = Math.floor(Math.random() * 10);
        logOutput(`Generated reward: ${reward}`);
        return { reward: reward, nextState: "Next" };
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let today = new Date().toLocaleString('en-us', { weekday: 'long' });
    document.getElementById("runSimulation").addEventListener("click", () => reinforcementLearning(today));
    document.getElementById("currentDay").textContent = `Simulation for ${today}`;
});

function reinforcementLearning(day) {
    clearOutput();
    logOutput("====================================");
    logOutput(`Starting simulation for ${day}`);
    let agent = new Agent();
    let environment = new Environment();
    let knownRewardsMap = {
        "Friday": [4, 16],
        "Saturday": [5, 10],
        "Sunday": [3, 12],
        "Monday": [6, 14],
        "Tuesday": [2, 8],
        "Wednesday": [7, 9],
        "Thursday": [1, 11]
    };
    
    let knownRewards = knownRewardsMap[day] || [];
    logOutput(`Known rewards for ${day}: ${knownRewards}`);
    
    let A = agent.action(environment);
    let result = environment.interact(A);
    agent.feedback(A, result.reward, result.nextState, knownRewards);
    logOutput(`Simulation for ${day} completed.`);
    logOutput("====================================\n");
}

function logOutput(message) {
    const outputElement = document.getElementById("output");
    outputElement.textContent += message + "\n";
    outputElement.scrollTop = outputElement.scrollHeight; // Auto-scroll to latest log
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}


