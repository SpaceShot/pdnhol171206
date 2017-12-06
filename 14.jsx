const ScheduleAPI = {
games: [
{
game: 1,
date: "9/10",
opponent: "Redskins",
result: "W",
score: "30-17"
},
{
game: 2,
date: "9/17",
opponent: "Chiefs",
result: "L",
score: "20-27"
},
{
game: 3,
date: "9/24",
opponent: "Giants",
result: "W",
score: "27-24"
},
{
game: 4,
date: "10/1",
opponent: "Chargers",
result: "W",
score: "26-24"
},
{
game: 5,
date: "10/8",
opponent: "Cardinals",
result: "W",
score: "34-7"
},
{
game: 6,
date: "10/12",
opponent: "Panthers",
result: "W",
score: "28-23"
},
{
game: 7,
date: "10/23",
opponent: "Redskins",
result: "W",
score: "34-24"
},
{
game: 8,
date: "10/29",
opponent: "49ers",
result: "W",
score: "33-10"
},
{
game: 9,
date: "11/5",
opponent: "Broncos",
result: "W",
score: "51-23"
},
{
game: 10,
opponent: "bye"
},
{
game: 11,
date: "11/19",
opponent: "Cowboys",
result: "W",
score: "37-9"
},
{
game: 12,
date: "11/26",
opponent: "Bears",
result: "W",
score: "31-3"
},
{
game: 13,
date: "12/3",
opponent: "Seahawks",
result: "L",
score: "10-24"
}
],
all: function() {
return this.games;
}
};

export default ScheduleAPI;
