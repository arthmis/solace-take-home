## Interface
- I would consider a different way of displaying data about the advocates. Most likely wouldn't use a table because it's hard to make a table responsive. I would use a card from DaisyUI. It would have 2 columns. The left column would be a flex column with the name of person, city, degree, years of experience and phone number. The 2nd column would list their specialties. On a mobile screen the specialties column might be hidden behind a `Details` HTML element
- I would add another select dropdown/search bar that let the user filter by city for advocates
    - the user would be able to select or type in what they are looking for
- also another dropdown that lets you select between the different types of professions like MD, PhD, MSW
- these two extra dropdowns would be optional
- searching would redirect to a new page with all the advocates that matched
    - this would allow users to save their search parameters via the URL and share if they want
- would have liked to format the data in the table better. Specifically align the columns from the top left so it was more natural to read. I would have also liked to format the phone numbers to be easier to read in format like (777) 888-8888
- I used DaisyUI for the styling because it's easy to add and provides pleasant UI styling and sticks to semantic HTML for the most part.
- better error handling if the server receives bad input
- better display when a search doesn't return anything
- assuming the data has hundreds of thousands of rows, I would also paginate the results and show only top 20 entries. How to determine the most relevant results is still up for design though

## Storage
- probably would have the specialties in their own table instead of inside of a `jsonb` column
- that way I can join the advocates table with the specialties table and drizzle would have better support for full text search

## Miscellaneous
- figure out some of the typescript type issues I had. They weren't blockers but I'm not familiar with TypeScript, NextJS, Drizzle ORM combination

## Testing
- would like to do testing on the search implementation to see if it actually works at least for the happy path. It works in manual testing but some automated tests would be great
