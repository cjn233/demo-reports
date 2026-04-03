function paginate_table($table, pageSize) {
    var $rows = $table.find('tr');
    var totalItems = $rows.length - 1; // Exclude the header row
    var page = Math.ceil(totalItems / pageSize);
    var curPage = 1;
    var direct = 0; // Direction for navigation

    function displayPage() {
        if (curPage <= 1 && direct === -1) {
            direct = 0;
            alert("Already the first page !!!");
            return;
        } else if (curPage >= page && direct === 1) {
            direct = 0;
            alert("Already the last page !!!");
            return;
        }

        if (curPage <= 1) {
            curPage = 1;
        } else if (curPage >= page) {
            curPage = page;
        }

        var begin = (curPage - 1) * pageSize + 1; // Adjust for header row
        var end = begin + pageSize - 1;
        if (end > totalItems) end = totalItems;

        $rows.hide();
        $rows.eq(0).show(); // Always show the header row
        $rows.slice(begin, end + 1).show(); // Adjust slice for 0-based index

        $table.siblings('div').find('.status').text(`Current: ${curPage}/${page} page |`);
        $table.siblings('div').find('.total').text(`Total items: ${totalItems} |`);
    }

    displayPage();

    $table.siblings('div').find('.firstBtn').click(function() {
        curPage = 1;
        direct = 0;
        displayPage();
    });

    $table.siblings('div').find('.prevBtn').click(function() {
        if (curPage > 1) {
            curPage--;
            direct = 0;
            displayPage();
        } else {
            alert("Already the first page !!!");
        }
    });

    $table.siblings('div').find('.nextBtn').click(function() {
        if (curPage < page) {
            curPage++;
            direct = 0;
            displayPage();
        } else {
            alert("Already the last page !!!");
        }
    });

    $table.siblings('div').find('.lastBtn').click(function() {
        curPage = page;
        direct = 0;
        displayPage();
    });

    $table.siblings('div').find('.goBtn').click(function() {
        var pageInput = parseInt($table.siblings('div').find('.changePage').val());
        if (!/^[1-9]\d*$/.test(pageInput)) {
            alert("请输入正整数");
            return;
        }
        if (pageInput > page) {
            alert("超出数据页面");
            return;
        }
        curPage = pageInput;
        direct = 0;
        displayPage();
    });

    $table.siblings('div').find('.pageSizeSet').click(function() {
        pageSize = parseInt($table.siblings('div').find('.pageSize').val());
        if (!/^[1-9]\d*$/.test(pageSize)) {
            alert("请输入正整数");
            return;
        }
        totalItems = $rows.length - 1;
        page = Math.ceil(totalItems / pageSize);
        curPage = 1;
        direct = 0;
        displayPage();
    });
}

$(document).ready(function() {
    var pageSize = 15;  // Set default page size
    $('.paginateTable').each(function() {
        paginate_table($(this), pageSize);
    });
});
