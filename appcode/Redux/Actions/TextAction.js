
export let TextAction = (data) => {
    console.log(data);
    return {
        type: "DEFAULT_ACTION",
        item: data
    }
}

