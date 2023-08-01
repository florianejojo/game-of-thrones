export const getIdFromUrl = (url: string) => {
    const urlSplittedBits = url.split("/");
    const id = urlSplittedBits[urlSplittedBits.length - 1];
    return id;
};
