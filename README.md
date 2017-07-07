This repository is the web frontend portion of my steam similar game finder project. The live demo of the project is at https://mithrillion.github.io/steam_app_frontend/. The web backend portion can be found at https://github.com/Mithrillion/steam_app_backend and the data processing code can be found at https://github.com/Mithrillion/steam_app_data_processing.
The project consists of the following steps:
1. Scrape Steam app titles and IDs from a saved version of steamdb.com (not using live scrapping according to terms of steamdb)
2. Scrape the store page image URLs and user-defined tags from store.steampowered.com for all app IDs obtained in step 1.
3. Download images from Steam's CDN.
4. Use PyTorch to train a deep neural network to predict the tags of a Steam game. The neural network is an adapted version of AlexNet, with the final prediction layer swapped with a two-layer RNN and a dense prediction layer in order to deal with multiple image inputs per game.
5. Use the network up to second last layer to generate a semantic encoding of top 10000 games on Steam, based on their store images.
6. Use an optimised nearest-neighbour algorithm to find closest games to a given input game.
7. Wrap the algorithm in step 6 in a web interface.
