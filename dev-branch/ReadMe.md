# Reinforcement Learning Simulation - Change Log

## Summary of Changes

This project implements a reinforcement learning simulation where an agent interacts with an environment over the course of a week. The simulation adapts per day with unique reward structures and automates state updates.

## **Key Differences Between Versions**

### 1. **Multi-Day Simulation Added**

- **Before:** The script executed a reinforcement learning cycle for a single day.
- **Now:** The script runs for all **seven days of the week** (Friday to Thursday), simulating different scenarios.

### 2. **Dynamic Known Rewards per Day**

- **Before:** The known rewards were fixed to `[4, 16]`.
- **Now:** Different days have specific reward values:
  
  ```javascript
  let knownRewardsMap = {
      "Friday": [4, 16],
      "Saturday": [5, 10],
      "Sunday": [3, 12],
      "Monday": [6, 14],
      "Tuesday": [2, 8],
      "Wednesday": [7, 9],
      "Thursday": [1, 11]
  };
  ```

### 3. **Iterative Execution for a Full Week**

- **Before:** Single execution cycle.
- **Now:** The script loops through all days and runs reinforcement learning separately:

  ```javascript
  const daysOfWeek = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  daysOfWeek.forEach(day => reinforcementLearning(day));
  ```

### 4. **Function Adaptation (`reinforcementLearning(day)`)**

- **Before:** The function ran without date specificity.
- **Now:** It takes a `day` parameter to adjust reward conditions dynamically.

## **Impact of the Changes**

- The **agent now learns dynamically** across multiple days.
- **Unique reward mapping per day** increases adaptability and variability.
- The simulation **can be extended automatically** for continuous learning experiments.

## **Next Steps for Automation**

- Implement **logging and data persistence** for each day's state.
- Automate running the script at set time intervals.
- Allow **external configuration** of reward mappings.

This README documents the changes to ensure maintainability and future automation!
