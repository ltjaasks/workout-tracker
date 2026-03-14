export const getWorkout = (day, maxes) => {
    const { squat = 0, bench = 0, deadlift = 0, press = 0 } = maxes

    if (day === 1) {
        return [
            { lift: "Bench", weight: bench * 0.70, reps: 8},
            { lift: "Bench", weight: bench * 0.80, reps: 6},
            { lift: "Bench", weight: bench * 0.90, reps: 4},
            { lift: "Bench", weight: bench * 0.90, reps: 4},
            { lift: "Bench", weight: bench * 0.90, reps: 4},
            { lift: "Bench", weight: bench * 0.80, reps: 5},
            { lift: "Bench", weight: bench * 0.75, reps: 6},
            { lift: "Bench", weight: bench * 0.70, reps: 7},
            { lift: "Bench", weight: bench * 0.65, reps: 8},
            { lift: "Overhead Press", weight: press * 0.60, reps: 6},
            { lift: "Overhead Press", weight: press * 0.75, reps: 3},
            { lift: "Overhead Press", weight: press * 0.75, reps: 5},
            { lift: "Overhead Press", weight: press * 0.75, reps: 7},
            { lift: "Overhead Press", weight: press * 0.75, reps: 4},
            { lift: "Overhead Press", weight: press * 0.75, reps: 6},
            { lift: "Overhead Press", weight: press * 0.75, reps: 8},
        ]
    }

    if (day === 2) {
        return [
            { lift: "Squat", weight: squat * 0.75, reps: 5},
            { lift: "Squat", weight: squat * 0.85, reps: 3},
            { lift: "Squat", weight: squat * 0.95, reps: 1},
            { lift: "Squat", weight: squat * 0.90, reps: 3},
            { lift: "Squat", weight: squat * 0.80, reps: 3},
            { lift: "Squat", weight: squat * 0.75, reps: 3},
            { lift: "Squat", weight: squat * 0.70, reps: 5},
            { lift: "Squat", weight: squat * 0.65, reps: 5},
            { lift: "Sumo Deadlift", weight: deadlift * 0.60, reps: 5},
            { lift: "Sumo Deadlift", weight: deadlift * 0.70, reps: 3},
            { lift: "Sumo Deadlift", weight: deadlift * 0.70, reps: 5},
            { lift: "Sumo Deadlift", weight: deadlift * 0.70, reps: 7},
            { lift: "Sumo Deadlift", weight: deadlift * 0.70, reps: 4},
            { lift: "Sumo Deadlift", weight: deadlift * 0.70, reps: 6},
            { lift: "Sumo Deadlift", weight: deadlift * 0.70, reps: 8},
        ]
    }

    if (day === 3) {
        return [
            { lift: "Overhead Press", weight: press * 0.75, reps: 5},
            { lift: "Overhead Press", weight: press * 0.85, reps: 3},
            { lift: "Overhead Press", weight: press * 0.95, reps: 1},
            { lift: "Overhead Press", weight: press * 0.90, reps: 3},
            { lift: "Overhead Press", weight: press * 0.85, reps: 3},
            { lift: "Overhead Press", weight: press * 0.80, reps: 3},
            { lift: "Overhead Press", weight: press * 0.75, reps: 5},
            { lift: "Overhead Press", weight: press * 0.70, reps: 5},
            { lift: "Incline Bench", weight: bench * 0.50, reps: 5},
            { lift: "Incline Bench", weight: bench * 0.70, reps: 3},
            { lift: "Incline Bench", weight: bench * 0.70, reps: 5},
            { lift: "Incline Bench", weight: bench * 0.70, reps: 7},
            { lift: "Incline Bench", weight: bench * 0.70, reps: 4},
            { lift: "Incline Bench", weight: bench * 0.70, reps: 6},
            { lift: "Incline Bench", weight: bench * 0.70, reps: 8},
        ]
    }

    if (day === 4) {
        return [
            { lift: "Deadlift", weight: deadlift * 0.75, reps: 5},
            { lift: "Deadlift", weight: deadlift * 0.85, reps: 3},
            { lift: "Deadlift", weight: deadlift * 0.95, reps: 1},
            { lift: "Deadlift", weight: deadlift * 0.90, reps: 3},
            { lift: "Deadlift", weight: deadlift * 0.85, reps: 3},
            { lift: "Deadlift", weight: deadlift * 0.80, reps: 3},
            { lift: "Deadlift", weight: deadlift * 0.75, reps: 3},
            { lift: "Deadlift", weight: deadlift * 0.70, reps: 3},
            { lift: "Front Squat", weight: squat * 0.40, reps: 5},
            { lift: "Front Squat", weight: squat * 0.60, reps: 3},
            { lift: "Front Squat", weight: squat * 0.60, reps: 5},
            { lift: "Front Squat", weight: squat * 0.60, reps: 7},
            { lift: "Front Squat", weight: squat * 0.60, reps: 4},
            { lift: "Front Squat", weight: squat * 0.60, reps: 6},
            { lift: "Front Squat", weight: squat * 0.60, reps: 8},
        ]
    }

    if (day === 5) {
        return [
            { lift: "Bench", weight: bench * 0.75, reps: 5},
            { lift: "Bench", weight: bench * 0.85, reps: 3},
            { lift: "Bench", weight: bench * 0.95, reps: 1},
            { lift: "Bench", weight: bench * 0.90, reps: 3},
            { lift: "Bench", weight: bench * 0.85, reps: 5},
            { lift: "Bench", weight: bench * 0.80, reps: 3},
            { lift: "Bench", weight: bench * 0.75, reps: 5},
            { lift: "Bench", weight: bench * 0.70, reps: 5},
            { lift: "Close Grip Bench", weight: bench * 0.40, reps: 5},
            { lift: "Close Grip Bench", weight: bench * 0.70, reps: 3},
            { lift: "Close Grip Bench", weight: bench * 0.70, reps: 5},
            { lift: "Close Grip Bench", weight: bench * 0.70, reps: 7},
            { lift: "Close Grip Bench", weight: bench * 0.70, reps: 4},
            { lift: "Close Grip Bench", weight: bench * 0.70, reps: 6},
            { lift: "Close Grip Bench", weight: bench * 0.70, reps: 8},
        ]
    }

    return []
}