sample_mflix: comments 
{ rated: { $not: { $eq: "G" } } }
Find movies where the rated is not "G".

sample_mflix: comments
{ $nor: [ { runtime: { $lt: 60 } }, { genres: { $in: ["Action"] } } ] }
Find movies where neither the runtime is less than 60 nor the genres contains "Action".

sample_mflix: comments
{ genres: { $nin: ["Horror", "Thriller"] } }
Find movies where the genres do not include "Horror" or "Thriller".

sample_mflix: comments
{ genres: { $in: ["Drama", "Romance"] } }
$in: Finds documents where a field's value is in a specified array.

sample_mflix: comments
{ runtime: { $ne: 100 } }
$ne: Finds documents where the value is not equal.

sample_mflix: comments
{ $nor: [ { runtime: { $lt: 60 } }, { genres: { $in: ["Action"] } } ] }
$nor: Ensures none of the conditions are met.


sample_mflix: comments
{ "imdb.rating": { $gt: 7 } }
$gt: Greater than comparison.



sample_mflix: comments
{ $or: [ { runtime: { $lt: 50 } }, { genres: { $in: ["Comedy"] } } ] }
lt: Less than comparison.
$in: Finds documents where a field's value is in a specified array.



sample_mflix: comments
{ title: { $eq: "Peter Pan" } }
$eq: Finds documents where the value matches exactly.


sample_mflix: comments
{ year: { $lt: 1920 } }
$lt: Less than comparison.


