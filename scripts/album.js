var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtURL: 'assets/images/album_covers/01.png',
    songs: [
        {title: 'Blue', duration: '4:26'},
        {title: 'Green', duration: '3:14'},
        {title: 'Red', duration: '5:01'},
        {title: 'Pink', duration: '3:21'},
        {title: 'Magenta', duration: '2:15'},
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtURL: 'assets/images/album_covers/20.png',
    songs: [
       {title: 'Hello, Operator?', duration: '1:01' },
       {title: 'Ring, ring, ring', duration: '5:01' },
       {title: 'Fits in your pocket', duration: '3:21'},
       {title: 'Can you hear me now?', duration: '3:14' },
       {title: 'Wrong phone number', duration: '2:15'}
    ]
};

var bamaChampionships = {
    title: 'The Dynasty',
    artist: 'Nick Saban',
    label: 'SEC',
    year: '2017',
    albumArtURL: 'http://larrybrownsports.com/wp-content/uploads/2016/01/nick-saban-grin.jpg',
    songs: [
       {title: '2009 Bama v Texas', duration: '37:21' },
       {title: '2011 Bama v LSU', duration: '21:00' },
       {title: '2012 Bama v Notre Dame', duration: '42:14'},
       {title: '2015 Bama v Clemson', duration: '45:40' },
       {title: '20?? Bama v ??', duration: '??:??'}
    ]
};

var createSongRow = function (songNumber, songName, songLength){
    var template =
        '<tr class = "album-view-song-item">'
     +      '<td class = "song-item-number">' + songNumber + '</td>'
     +      '<td class = "song-item-title">' + songName + '</td>'
     +      '<td class = "song-item-duration">' + songLength + '</td>'
     +  '</tr>'
     ;

     return template;
}

var setCurrentAlbum = function(album){
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtURL);
    albumSongList.innerHTML = '';
    for (var i = 0; i < album.songs.length; i++){
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

var albumsArray = [albumPicasso, albumMarconi, bamaChampionships];

window.onload = function (){
    setCurrentAlbum(albumsArray[0]);
};


document.getElementById("album-button").addEventListener("click", function(){
    var first = albumsArray.shift();
    albumsArray.push(first);
    setCurrentAlbum(albumsArray[0]);
    document.reload();
});