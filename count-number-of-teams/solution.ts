function numTeams(rating: number[]): number {
    let count = 0
    for (let i= 0; i < rating.length; i++) {
        const first = rating[i]
        for(let j = i + 1; j < rating.length; j++) {
            if(rating[j] < rating[i]) continue
            for(let k = j+1; k< rating.length; k++) {
                if(rating[k] < rating[j]) continue
                count ++
            }
        }
    }

    for (let i= 0; i < rating.length; i++) {
        const first = rating[i]
        for(let j = i + 1; j < rating.length; j++) {
            if(rating[j] > rating[i]) continue
            for(let k = j+1; k< rating.length; k++) {
                if(rating[k] > rating[j]) continue
                count ++
            }
        }
    }

    return count
};