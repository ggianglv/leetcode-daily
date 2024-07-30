function minimumDeletions(s: string): number {
    let bCount = 0
    let removedCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'b') {
            bCount++
        } else {
            removedCount = Math.min(removedCount + 1, bCount)
        }
    }

    return removedCount
};