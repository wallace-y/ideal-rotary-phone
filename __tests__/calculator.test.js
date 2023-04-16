const { daysAndHoursToEarn } = require("../calculator"); // Replace with the correct file path

// Test cases
describe('daysAndHoursFunction', () => {
    
test.only('Test 1: Hourly earnings', () => {
    const result = daysAndHoursToEarn(10, 'hourly', 100);
    const result1 = daysAndHoursToEarn(8, 'hourly', 413);
    expect(result.days).toBe(1);
    expect(result.hours).toBe(2);
    expect(result1.days).toBe(6);
    expect(result1.hours).toBe(3);
  });
  
  test('Test 2: Weekly earnings', () => {
    const result = daysAndHoursToEarn(200, 'weekly', 1000);
    expect(result.days).toBe(25);
    expect(result.hours).toBe(0);
  });
  
  test('Test 3: Monthly earnings', () => {
    const result = daysAndHoursToEarn(1000, 'monthly', 12000);
    expect(result.days).toBe(300);
    expect(result.hours).toBe(0);
  });
  
  test('Test 4: Yearly earnings', () => {
    const result = daysAndHoursToEarn(50000, 'yearly', 150000);
    expect(result.days).toBe(781);
    expect(result.hours).toBe(2);
  });
  
  test('Test 5: Earnings as string', () => {
    const result = daysAndHoursToEarn('50', 'hourly', 500);
    expect(result.days).toBe(1);
    expect(result.hours).toBe(2);
  });

  test('Test 6: Zero earnings', () => {
    const result = daysAndHoursToEarn(0, 'weekly', 100);
    expect(result).toBe("Earnings must be greater than zero.")
  });
  
  test('Test 7: Zero price', () => {
    const result = daysAndHoursToEarn(100, 'monthly', 0);
    expect(result).toBe("Price must be greater than zero.")
  });
  
  test('Test 8: Large earnings and price', () => {
    const result = daysAndHoursToEarn(100000, 'yearly', 1000000);
    expect(result.days).toBe(2604);
    expect(result.hours).toBe(1);
  });
  
  test('Test 9: Fractional earnings and price', () => {
    const result = daysAndHoursToEarn(0.5, 'hourly', 5);
    expect(result.days).toBe(1);
    expect(result.hours).toBe(2);
  });
});