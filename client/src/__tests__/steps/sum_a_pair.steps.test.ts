import { defineFeature, loadFeature } from 'jest-cucumber';
const feature = loadFeature('src/__tests__/features/sum_a_pair.feature');

defineFeature(feature, test => {
    test('adds 2 + 2 to equal 4', ({ given, when, then }) => {
      let x: number;
      let z: number;
  
      given('2', () => {
        x = 2;
      });
      
      when('add 2', () => {
        z = x + 2;
      });
      
      then('the sum is 4', () => {
        expect(z).toBe(4);
      });
    });
  });

  