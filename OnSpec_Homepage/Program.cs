var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// 1. wwwroot 폴더 안의 정적 파일(html, js 등)을 사용할 수 있게 함
app.UseStaticFiles();

// 2. 주소창에 아무것도 안 쳤을 때 index.html을 기본으로 띄움
app.UseDefaultFiles();
app.MapFallbackToFile("index.html");

app.Run();