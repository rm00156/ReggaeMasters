$(document).ready(function(){

    $('#categories').on('change', selectCategories);

    setupColorSection();
    $('#color1Picture').on('change',picture);
    $('#color1Picture2').on('change',picture);
    $('#color1Picture3').on('change',picture);
    $('#color1Picture4').on('change',picture);

    $('#color2Picture').on('change',picture);
    $('#color2Picture2').on('change',picture);
    $('#color2Picture3').on('change',picture);
    $('#color2Picture4').on('change',picture);

    $('#color3Picture').on('change',picture);
    $('#color3Picture2').on('change',picture);
    $('#color3Picture3').on('change',picture);
    $('#color3Picture4').on('change',picture);

    $('#picture').on('change',picture);
    $('#picture2').on('change',picture);
    $('#picture3').on('change',picture);
    $('#picture4').on('change',picture);

    $('#addProduct').on('click', addProduct);
});

function addProduct()
{
    $('#productNameError').text('');
    $('#priceError').text('');
    $('#categoriesError').text('');
    $('#color1Error').text('');
    $('#productTypeError').text('');
    $('#descriptionError').text('');
    $('#pictureError').text('');
    // check that product name, price, category and type not null
    var productName = $('#productName').val();
    var price = $('#price').val();
    var categories = $('#categories').val();
    var productType = $('#productType').val();
    var color1 = $('#color1').val();
    var color2 = $('#color2').val();
    var color3 = $('#color3').val();
    var color1PictureFl = $('#color1Picture').prop('files').length == 0;
    var color2PictureFl = $('#color2Picture').prop('files').length == 0;
    var color3PictureFl = $('#color3Picture').prop('files').length == 0;
    var pictureFl = $('#picture').prop('files').length == 0;
    var description = $('#description').val();

    if( productName == '' || price == '' || categories == 0 || productType == null  || 
        ( categories == 1 && (color1 == 0 || color1PictureFl == true)) || (color2 != 0 && color2PictureFl == true) 
            || (color3 != 0 && color3PictureFl == true) || description == '' || (categories != 1 && pictureFl == true))
    {
        // error
        // determine the error display the necessary message

        if(productName == '')
            $('#productNameError').text('Product name can not be empty');
        
        if(price == '')
            $('#priceError').text('Price can not be empty');
    
        if(categories == 0)
            $('#categoriesError').text('No Category has been selected');
        
        if(productType == null)
            $('#productTypeError').text('No Product Type has been selected');
        
        if(color1 == 0 || color1PictureFl == true)
        {
            if(color1 == 0)
            {
                $('#color1Error').text('No Color has been selected, color 1 must be set for this category of product.');
            }
            else
            {
                $('#picture1Error').text('No Main Picture has been selected');
            }
        }
        if(color2 != 0 && color2PictureFl == true)
            $('#picture2Error').text('No Main Picture has been selected');
        if(color3 != 0 && color3PictureFl == true)
            $('#picture2Error').text('No Main Picture has been selected');
        
        if(description == '')
            $('#descriptionError').text('No Description has been set');
        
        if(categories != 1 && pictureFl == true)
        {
            $('#pictureError').text('No Main Picture has been selected');
        }

        console.log('error');
    }
    else
    {
        // should be good to fire off to the server for further validation
        console.log('success');

        var data = new FormData();
        var request = new XMLHttpRequest();
        request.responseType = 'json';
        data.append('productName',productName);
        data.append('price',price);
        data.append('categories',categories)
        data.append('productType',productType);
        data.append('color1',color1);
        data.append('color2',color2);
        data.append('color3',color3);
        data.append('color1Picture',($('#color1Picture').prop('files'))[0]);
        data.append('color2Picture',($('#color2Picture').prop('files'))[0]);
        data.append('color3Picture',($('#color3Picture').prop('files'))[0]);
        data.append('color1Picture2',($('#color1Picture2').prop('files'))[0]);
        data.append('color2Picture2',($('#color2Picture2').prop('files'))[0]);
        data.append('color3Picture2',($('#color3Picture2').prop('files'))[0]);
        data.append('color1Picture3',($('#color1Picture3').prop('files'))[0]);
        data.append('color2Picture3',($('#color2Picture3').prop('files'))[0]);
        data.append('color3Picture3',($('#color3Picture3').prop('files'))[0]);
        data.append('color1Picture4',($('#color1Picture4').prop('files'))[0]);
        data.append('color2Picture4',($('#color2Picture4').prop('files'))[0]);
        data.append('color3Picture4',($('#color3Picture4').prop('files'))[0]);
        data.append('picture',($('#picture').prop('files'))[0]);
        data.append('picture2',($('#picture2').prop('files'))[0]);
        data.append('picture3',($('#picture3').prop('files'))[0]);
        data.append('picture4',($('#picture4').prop('files'))[0]);
        data.append('description',description);
        data.append('small',$('#small').val());
        data.append('medium',$('#medium').val());
        data.append('large',$('#large').val());
        data.append('xl',$('#xl').val());
        data.append('xxl',$('#xxl').val());
        data.append('stock', $('#stock').val());
        data.append('bestSeller', $('#bestSeller').is(':checked'));
        data.append('newArrivals', $('#newArrivals').is(':checked'));
        console.log(data);
        request.addEventListener('load', function(e){

            var data = request.response;
            console.log(data);
        });

        request.open('post','/addProduct');
        request.send(data);
    }
}


function picture(e)
{
    var color_number = e.currentTarget.getAttribute('data-color-number');

    $('#picture'+ color_number +'Error').text('');
    $('#picture'+ color_number +'Error2').text('');
    $('#picture'+ color_number +'Error3').text('');
    $('#picture'+ color_number +'Error4').text('');
    
    if( color_number != '')
    {
        if($('#color'+ color_number +'Picture').prop('files').length > 0)
        {
            $('#picture'+ color_number +'Error').text('File Added');
        }
    
        if($('#color'+ color_number +'Picture2').prop('files').length > 0)
        {
            $('#picture'+ color_number +'Error2').text('File Added');
        }
    
        if($('#color'+ color_number +'Picture3').prop('files').length > 0)
        {
            $('#picture'+ color_number +'Error3').text('File Added');
        }
    
        if($('#color'+ color_number +'Picture4').prop('files').length > 0)
        {
            $('#picture'+ color_number +'Error4').text('File Added');
        }
    }
    else
    {
        if($('#picture').prop('files').length > 0)
        {
            $('#pictureError').text('File Added');
        }

        if($('#picture2').prop('files').length > 0)
        {
            $('#picture2Error').text('File Added');
        }
        if($('#picture3').prop('files').length > 0)
        {
            $('#picture3Error').text('File Added');
        }
        if($('#picture4').prop('files').length > 0)
        {
            $('#picture4Error').text('File Added');
        }
    }
}


function setupColorSection()
{
    for(var i = 0; i < 3; i++)
    {
        $('#color' + i).on('change', selectColor);
    }
}

function selectColor(e)
{
    var number = e.currentTarget.getAttribute('data-number');
    $('#color' + number +'Section').css('display', $('#color' + number).val() == 0 ? 'none' : ''); 
}

function selectCategories(e)
{
   var categoryId = $('#categories').val();

   $.ajax({
       type:'get',
       url:'/getProductTypes',
       data:{categoryId:categoryId},
       success:function(data)
       {
            var productTypes = data.productTypes;
            $('#productType').empty();
            
            for(var i = 0; i < productTypes.length; i++)
            {
                var productType = productTypes[i];
                $('#productType').append('<option value="' + productType.id + '">' + productType.name + '</option>')
            }
            if(categoryId != 0)
            {
                $.ajax({
                    type:'get',
                    url:'/getProductTypeGroup',
                    data:{categoryId:categoryId},
                    success:function(data)
                    {
                        var productTypeGroup = data.productTypeGroup;
                        console.log(productTypeGroup)
                        if(productTypeGroup.sizesFl == true)
                        {
                            $('#sizeQuantitySection').css('display','');
                            $('#quantitySection').css('display','none');
                        }
                        else
                        {
                            $('#sizeQuantitySection').css('display','none');
                            $('#quantitySection').css('display','');
                        }

                        if(productTypeGroup.colorsFl == true)
                        {
                            $('#colorsSection').css('display','');
                            $('#pictureSection').css('display','none');
                        }
                        else
                        {
                            $('#colorsSection').css('display','none');
                            $('#pictureSection').css('display','');
                        }
                    }
                })
            }
            else
            {
                $('#sizeQuantitySection').css('display','');
                $('#quantitySection').css('display','none');
            }
       }
   })
}