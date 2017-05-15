# Schema

## users

column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
username | string | not null, indexed, unique
password_digest | string | not null, indexed
session_token | string | not null, indexed, unique
profile_pic | string |

## songs

column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
title | string | not null, indexed, unique
artist_id | integer | not null, indexed, foreign key
image_url | string |
genre | string |
song_source | string | not null, unique
waveform | string |

## comments

column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
body | text | not null
user_id | integer | not null, indexed, foreign key
song_id | integer | not null, indexed, foreign key
