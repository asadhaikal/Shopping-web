<template>
    <ul class="list-group">
  <li class="list-group-item">
    <button type="button" class="x btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    <div class="d-flex">
        <div class="flex-shrink-0">
            <img 
            width="80px"
            src="https://m.media-amazon.com/images/I/719tCHXNiXL._AC_UL320_.jpg" alt="...">
        </div>
        <div class="media-body">
            <p class="mt-0">Judul</p>
            <button class="btn-qty btn btn-sm btn-secondary">-</button>
            x 1
             <button class="btn-qty btn btn-sm btn-secondary">+</button>
        </div>
</div></li>
 
</ul>
</template>

<style scoped>
.media-body{
    text-align: left;
}
.media{
    width: 90%;
}
.x{
    left: 170px;
    position: relative;
}
</style>