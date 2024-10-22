export const texts = [
    {
        age: {
            id: 2,
            ans1: {
                text: "Under 30",
                points: 0,
            },
            ans2: {
                text: "30-34",
                points: 1,
            },
            ans3: {
                text: "35-39",
                points: 6,
            },
            ans4: {
                text: "40-44",
                points: 15,
            },
            ans5: {
                text: "45-49",
                points: 40,
            },
            ans6: {
                text: "50-54",
                points: 70,
            },
            ans7: {
                text: "55-59",
                points: 100,
            },
            ans8: {
                text: "60-64",
                points: 110,
            },
            ans9: {
                text: "65-69",
                points: 120,
            },
            ans10: {
                text: "70-74",
                points: 130,
            },
            ans11: {
                text: "75 and over",
                points: 140,
            }
        },
    },
    {
        cardiovascularHistory: {
            id: 3,
            ans1: {
                text: "Do you have diagnosed cardiovascular disease, atherosclerosis, previous heart attack, and/or previous stroke",
                points: 100,
            },
            ans2: {
                text: "Have you experienced angina (heart pain) within the last 3 months",
                points: 150,
            },
            ans3: {
                text: "None of the above",
                points: 0,
            }

        }
    },
    {
        familyHistory: {
            id: 4,
            ans1: {
                text: "Mother with Cardiovascular Disease at less than 65 years(high blood pressure, heart attack,angina, stroke, hardening of the arteries)",
                points: 15,
            },
            ans2: {
                text: "Father with Cardiovascular Disease at less than 55 years(high blood pressure, heart attack, angina, stroke, hardening of the arteries)",
                points: 15,
            },
            ans3: {
                text: "Parent with Type II Diabetes (adult-onset diabetes)",
                points: 15,
            }
        }
    },
    {
        lifestyle: {
            id: 5,
            ans1: {
                text: "Sedentary – moderate exercise less than once a week",
                points: 20,
            },
            ans2: {
                text: "Moderate exercise (average once per week)",
                points: 1,
            },
            ans3: {
                text: "Moderate exercise (average 2 – 3 times per week)",
                points: -10,
            },
            ans4: {
                text: "Moderate exercise (average 2 – 3 times per week)",
                points: -20,
            },
            ans5: {
                text: "Moderate exercise(average 5 or more times per week)",
                points: -25,
            },

        }
    },
    {
        smoking: {
            id: 6,
            ans1: {
                text: "Never smoked",
                points: 0,
            },
            ans2: {
                text: "Ex-smoker",
                points: 10,
            },
            ans3: {
                text: "Current smoker less than 20 cigarettes/day",
                points: 50,
            },
            ans4: {
                text: "Current smoker more than 20 cigarettes/day",
                points: 80,
            },
        }
    },
    {
        passiveSmoking: {
            id: 7,
            ans1: {
                text: "Yes",
                points: 25,
            },
            ans2: {
                text: "No",
                points: 0,
            },

        }
    },
    {
        Alcohol1: {
            id: 8,
            ans1: {
                text: "Average 0 drinks daily",
                points: 0,
            },
            ans2: {
                text: "Average 1 drink daily or 7 units per week",
                points: -10,
            },
            ans3: {
                text: "Average 2 drinks daily or 14 units per week",
                points: -5,
            },
            ans4: {
                text: "Average 3 or more drinks daily or 21 or more units per week",
                points: 5,
            }
        }
    },
    {
        Alcohol2: {
            id: 9,
            ans1: {
                text: "Do you consume: Male: 5 or more drinks Female: 3 or more drinks in one sitting on a fortnightly or more frequent basis?",
                points: 7,
            },
            ans2: {
                text: "None of the above",
                points: 0,
            },
        }
    },
    {
        environment: {
            id: 10,
            ans1: {
                text: "Do you live on a main road?",
                points: 4,
            },
            ans2: {
                text: "Do you live in a city?",
                points: 3,
            },
            ans3: {
                text: "Do you live in an industrial area with gas emissions?",
                points: 2,
            },
            ans4: {
                text: "Do you work with any chemicals, cleaners, pesticides, petrochemicals, paints, exhausts?",
                points: 4,
            },
            ans5: {
                text: "None of the above",
                points: 0,
            },
        }
    },
    {
        stress: {
            id: 11,
            ans1: {
                text: "Death of spouse",
                points: 30,
            },
            ans2: {
                text: "Death of family member",
                points: 20,
            },
            ans3: {
                text: "Divorce/seperation",
                points: 20,
            },
            ans4: {
                text: "Marital reconciliation",
                points: 20,
            },
            ans5: {
                text: "Jail term",
                points: 20,
            },
            ans6: {
                text: "Major illness/injury/surgery",
                points: 20,
            },
            ans7: {
                text: "Marriage",
                points: 10,
            },
            ans8: {
                text: "Dismissal from work",
                points: 10,
            },
            ans9: {
                text: "Retirement",
                points: 10,
            },
            ans10: {
                text: "Death of a friend",
                points: 8,
            },
            ans11: {
                text: "Illness in the family",
                points: 8,
            },
            ans12: {
                text: "Sexual difficulties",
                points: 5,
            },
            ans13: {
                text: "Pregnancy",
                points: 5,
            },
            ans14: {
                text: "Moving to a new town/city/country",
                points: 5,
            },
            ans15: {
                text: "Family/relationship disputes",
                points: 5,
            },
            ans16: {
                text: "Change in financial state",
                points: 3,
            },
            ans17: {
                text: "Change of occupation",
                points: 3,
            },
            ans18: {
                text: "Change in work responsibilities",
                points: 3,
            },
            ans19: {
                text: "Mortgage",
                points: 3,
            },
            ans20: {
                text: "Major family events – weddings, births in the immediate family",
                points: 3,
            },
            ans21: {
                text: "Son or daughter leaving home",
                points: 3,
            },
            ans22: {
                text: "Personal difficulties at work",
                points: 3,
            },
            ans23: {
                text: "Outstanding personal achievement",
                points: 2,
            },
            ans24: {
                text: "Change in residence",
                points: 2,
            },
            ans25: {
                text: "Change in schools",
                points: 2,
            },
            ans26: {
                text: "Change in social habits",
                points: 2,
            },
            ans27: {
                text: "Change in routine",
                points: 2,
            },
            ans28: {
                text: "Holidays",
                points: 2,
            },
            ans29: {
                text: "Christmas",
                points: 2,
            },
            ans30: {
                text: "Minor violations of the law",
                points: 2,
            },
        }
    },
    {
        activities: {
            id: 12,
            ans1: {
                text: "Meditation/prayer",
                points: -5,
            },
            ans2: {
                text: "Yoga/stretching/relaxation exercises",
                points: -5,
            },
            ans3: {
                text: "Community events/social activities/sports",
                points: -5,
            },
            ans4: {
                text: "Play with pets",
                points: -4,
            },
        }
    },
    {
        anxiety: {
            id: 13,
            ans1: {
                text: "Weekly or more",
                points: 40,
            },
            ans2: {
                text: "Monthly or more",
                points: 20,
            },
            ans3: {
                text: "None of the above",
                points: 0,
            },
        },
    },
    {
        sadness: {
            id: 14,
            ans1: {
                text: "Weekly or more",
                points: 30,
            },
            ans2: {
                text: "Monthly or more",
                points: 15,
            },
            ans3: {
                text: "None of the above",
                points: 0,
            },
        },
    },
    {
        frustrated: {
            id: 15,
            ans1: {
                text: "Weekly or more",
                points: 25,
            },
            ans2: {
                text: "Monthly or more",
                points: 12,
            },
            ans3: {
                text: "None of the above",
                points: 0,
            },
        }
    },
    {
        sleepPerNight: {
            id: 16,
            ans1: {
                text: "0-4",
                points: 6,
            },
            ans2: {
                text: "5-6",
                points: 3,
            },
            ans3: {
                text: "7-8",
                points: 0,
            },
            ans4: {
                text: "More than 8 hours",
                points: 4,
            },
        },
    },
    {
        sleepExperience: {
            id: 17,
            ans1: {
                text: "Snoring",
                points: 3,
            },
            ans2: {
                text: "Obstructive sleep apnoea",
                points: 10,
            },
            ans3: {
                text: "Insomnia, difficulty falling asleep or interrupted sleep",
                points: 3,
            },
            ans4: {
                text: "None of the above",
                points: 0,
            },
        }
    },
    {
        abdominalPain: {
            id: 18,
            ans1: {
                text: "Yes",
                points: 8,
            },
            ans2: {
                text: "No",
                points: 0,
            },
        },
    },
    {
        contraceptivePill: {
            id: 19,
            ans1: {
                text: "Yes",
                points: 5,
            },
            ans2: {
                text: "No",
                points: 0,
            }
        },
    },
    {
        antibiotics: {
            id: 20,
            ans1: {
                text: "Less than 2 weeks",
                points: 0,
            },
            ans2: {
                text: "2 weeks - 2 months",
                points: 2,
            },
            ans3: {
                text: "2 - 6 months",
                points: 5,
            },
            ans4: {
                text: "Longer than 6 months",
                points: 10,
            },
        }
    },
    {
        bloodSugar: {
            id: 21,
            ans1: {
                text: "Do you feel your energy levels drop within an hour of eating? and / or Do you experience cravings for sweets or chocolate? and / or Do you have headaches or an inability to concentrate which is relieved by eating?",
                points: 10,
            },
            ans2: {
                text: "None of the above",
                points: 0,
            }
        }
    },
    {
        diabetic: {
            id: 22,
            ans1: {
                text: "Yes",
                points: 100,
            },
            ans2: {
                text: "No",
                points: 0,
            }
        }
    },
    {
        wheezing: {
            id: 23,
            ans1: {
                text: "Wheezing, sneezing, a runny nose, sore throat, itchy or watery eyes, coughing and/ or blocked nose",
                points: 5
            },
            ans2: {
                text: "Heart palpitations or headaches after certain foods",
                points: 5,
            },
            ans3: {
                text: "None of the above",
                points: 0,
            }
        }
    },
    {
        recurrentPain: {
            id: 24,
            ans1: {
                text: "Daily",
                points: 30,
            },
            ans2: {
                text: "Weekly",
                points: 15,
            },
            ans3: {
                text: "Monthly or less",
                points: 5
            },
            ans4: {
                text: "Never",
                points: 0
            }
        }
    },
    {
        friedFoods: {
            id: 25,
            ans1: {
                text: "Less than once a week",
                points: 0,
            },
            ans2: {
                text: "1 - 2 times a week",
                points: 1,
            },
            ans3: {
                text: "3 - 6 times a week",
                points: 5,
            },
            ans4: {
                text: "Every day",
                points: 10,
            }
        }
    },
    {
        bread: {
            id: 26,
            ans1: {
                text: "0 - 1 serves daily",
                points: 0,
            },
            ans2: {
                text: "2 server daily",
                points: 0,
            },
            ans3: {
                text: "3 servers daily",
                points: 2,
            },
            ans4: {
                text: "4 or more serves daily",
                points: 4,
            },
        }
    },
    {
        sweetFoods: {
            id: 27,
            ans1: {
                text: "Usually none",
                points: 0
            },
            ans2: {
                text: "1 - 2 serves daily",
                points: 2
            },
            ans3: {
                text: "More than 2 serves daily",
                points: 8,
            }
        }
    },
    {
        sugar: {
            id: 28,
            ans1: {
                text: "0 - 3",
                points: 0,
            },
            ans2: {
                text: "4 - 6",
                points: 1
            },
            ans3: {
                text: "7 - 9",
                points: 4
            },
            ans4: {
                text: "10 or more",
                points: 7
            }
        }
    },
    {
        fish: {
            id: 29,
            ans1: {
                text: "Rarely",
                points: 0
            },
            ans2: {
                text: "1 - 2 times a week",
                points: -2
            },
            ans3: {
                text: "3 - 6 times a week",
                points: -5
            },
            ans4: {
                text: "Every day",
                points: -10
            }
        }
    },
    {
        fruit: {
            id: 30,
            ans1: {
                text: "Usually none",
                points: 0
            },
            ans2: {
                text: "1 - 3 pieces daily",
                points: -2
            },
            ans3: {
                text: "4 or more pieces daily",
                points: -3
            }
        }
    },
    {
        vegetables: {
            id: 31,
            ans1: {
                text: "Usually none",
                points: 0
            },
            ans2: {
                text: "1 - 2 cups daily",
                points: -3
            },
            ans3: {
                text: "3 - 4 serves daily",
                points: -5
            },
            ans4: {
                text: "5 or more serves daily",
                points: -10
            }
        }
    },
    {
        coffe: {
            id: 32,
            ans1: {
                text: "Usually none",
                points: 0
            },
            ans2: {
                text: "1 - 2 cups daily",
                points: 0
            },
            ans3: {
                text: "3 - 4 cups daily",
                points: 2
            },
            ans4: {
                text: "5 or more cups daily",
                points: 4
            }
        }
    },
    {
        softDrink: {
            id: 33,
            ans1: {
                text: "Less than 500 ml per week",
                points: 0
            },
            ans2: {
                text: "1 - 2 litres per week",
                points: 2
            },
            ans3: {
                text: "3 - 4 litres per week",
                points: 4
            },
            ans4: {
                text: "5 or more litres per week",
                points: 8
            }
        }
    },
    {
        water: {
            id: 34,
            ans1: {
                text: "0 - 500 ml",
                points: 7
            },
            ans2: {
                text: "501 ml - 1.25 litres",
                points: 3
            },
            ans3: {
                text: "More than 1.25 litres",
                points: 0
            }
        }
    }

]