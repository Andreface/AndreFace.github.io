


 var PublicKey = "FEHUVEW84RAFR5SP22RABURUPHAFRUNU";
 var PrivateKey = "ZUXEVEGA9USTAZEWRETHAQUBUR69U6EF";
 var Token = "1feeb2dce6a5a1d1c8eca2349a4dcde505d25ef85";
 var TokenSecret = "56f1b5d1582dfdb423b25cb7cf506a29";

 var BaseUrl = "http://api.telldus.com/";

  var client = new RestClient(BaseUrl);

   client.Authenticator = OAuth1Authenticator.ForProtectedResource(PublicKey, PrivateKey, Token, TokenSecret);

   

     

      function CallWebAPI() {

        var request = new RestRequest("json/device/turnOn", Method.GET);
        request.AddParameter("id", 4777172, ParameterType.GetOrPost);
        var response = client.Execute(request);
    } 