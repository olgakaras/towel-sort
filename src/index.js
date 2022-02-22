// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        let examination = i % 2 == 0 ? matrix[i] : matrix[i].reverse();

        res.push(...examination);
    }
    return res;
};
