// localhost:3000/hello/api [GET]
export const GET = async (request: Request, response: Response) => {
    console.log('GET request route handler');

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());


    console.log(request);
    console.log(response);


    response.headers.set('XXX', 'asdqwe');
    return Response.json(users);
}

// localhost:3000/hello/api [POST]
export const POST = () => {
    console.log('POST request route handler');
    return Response.json({message: 'Request route handler POST'});

}