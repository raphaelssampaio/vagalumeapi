const apikey = '';

export const GET_SONGS_RANK = `/rank.php?type=mus&period=month&scope=all&limit=5&apikey=${apikey}`;
export const GET_ARTISTS_RANK = `/rank.php?type=art&period=month&scope=all&limit=5&apikey=${apikey}`;
export const GET_ALBUNS_RANK = `/rank.php?type=alb&period=month&scope=all&limit=5&apikey=${apikey}`;
