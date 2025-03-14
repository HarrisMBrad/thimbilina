// Reinforcement Learning Experiment for Multiple Days with Debug Logs

class Agent {
    constructor() {
        this.reward = 0;
        this.state = "initial";
        console.log("Agent initialized with state: initial");
    }

    action(environment) {
        console.log("Agent performs an action");
        return "Next";  // Placeholder for next action/state
    }

    feedback(A, RW, nextState, knownRewards) {
        console.log(`Agent received feedback: Action(${A}), Reward(${RW}), NextState(${nextState})`);
        console.log(`Known rewards for validation: ${knownRewards}`);
        if (knownRewards.includes(RW)) {
            this.state = nextState;
            console.log(`State updated to: ${this.state}`);
        } else {
            console.log("State not updated due to mismatched reward");
        }
    }
}

class Environment {
    constructor() {
        this.state = "initial";
        console.log("Environment initialized with state: initial");
    }

    interact(action) {
        console.log(`Environment reacts to action: ${action}`);
        let reward = Math.floor(Math.random() * 10);
        console.log(`Generated reward: ${reward}`);
        return { reward: reward, nextState: "Next" };
    }
}

function reinforcementLearning(day) {
    console.log("====================================");
    console.log(`Starting simulation for ${day}`);
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
    console.log(`Known rewards for ${day}: ${knownRewards}`);
    
    let A = agent.action(environment);
    let result = environment.interact(A);
    agent.feedback(A, result.reward, result.nextState, knownRewards);
    console.log(`Simulation for ${day} completed.`);
    console.log("====================================\n");
}

// Simulate for the next 7 days starting from Friday
const daysOfWeek = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
daysOfWeek.forEach(day => reinforcementLearning(day));

