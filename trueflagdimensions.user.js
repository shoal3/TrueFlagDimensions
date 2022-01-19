// ==/UserScript==
// @name True Flag Dimensions
// @namespace trueflagdimensions
// @description Change 4chan flag width to match the flag's actual dimensions. Also updates and fixes flags.
// @include     http*://boards.4chan.org/pol/*
// @include     http*://boards.4chan.org/pol/catalog
// @include     http*://boards.4chan.org/bant/*
// @include     http*://boards.4chan.org/bant/catalog
// @include     http*://boards.4channel.org/int/*
// @include     http*://boards.4channel.org/int/catalog
// @include     http*://boards.4channel.org/sp/*
// @include     http*://boards.4channel.org/sp/catalog
// @grant       GM_addStyle
// @icon        
// ==/UserScript==

GM_addStyle(".flag { background-image:url("flags.png"); }" +
            ".flag-ae { width:22px; background-position:-0px -0px; }" +
