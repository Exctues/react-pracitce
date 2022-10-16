export const getPageCount = (totalPages, limit) => {
    return Math.ceil(totalPages / limit)
}
export const getPagesArray = (totalPages) => {
    let pagesArray = [];
    for (let i = 0; i < totalPages; i++)
        pagesArray.push(i + 1);
    return pagesArray
}
