{ScheduleAPI.all().map(g => (
[li key={g.game} className={g.result === "W" ? "" : "loss"}>
[div>{g.date}
[div>{g.opponent}
[div>{g.result}
[div>{g.score}
[/li>
))}"
