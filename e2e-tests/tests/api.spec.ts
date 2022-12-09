import { test, expect, request } from '@playwright/test';

test('Should return albums.', async ({ request }) => {
    // Make a GET request to the albums API
    const albums = await request.get(process.env.apiUrl + 'albums');    
    // Verify that the response is OK
    await expect(albums.ok()).toBeTruthy();
    //  For each album, assert that the response contains the expected properties
    const respBody = JSON.parse(await albums.text())
    for (let i = 0; i < respBody.length; ++i)
    { 
        await expect(respBody[i].id).toBeTruthy()
        await expect(respBody[i].title).toBeTruthy()
        await expect(respBody[i].artist).toBeTruthy()
        await expect(respBody[i].price).toBeTruthy()
        await expect(respBody[i].image_url).toBeTruthy()
    }
});