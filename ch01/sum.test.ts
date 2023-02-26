const sum = (n1: number, n2: number) => {
    return n1 + n2
}

test('sum', () => {
    expect(sum(1,2)).toBe(3);
})
