echo "#include <stdio.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

int main()
{
    float a,b,c;
    cout<<\"ingrese 1st numero\";
    cin>>a;
    cout<<\"ingrese 2nd numero:\";
    cin>>b;

    c=a+b;
    cout<<a<<\"+\"<<b<<\"=\"<<c<<endl;

return 0;
}" > main2.cpp
g++ main2.cpp -o main2exe
chmod +x main2exe
param0=1
param1=2
./main2exe <<EOF
$param0
$param1
EOF
rm main2exe
rm main2.cpp