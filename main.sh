echo "#include <stdio.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

int main()
{
    float a,b,c,d;
    cin>>a;
    cin>>b;
    cin>>c;

    d=a*b*c;
    cout<<d<<endl;

return 0;
}" > test.cpp
g++ test.cpp -o testexe
chmod +x testexe
a=1.2
b=2.5
./testexe <<EOF
$a
$b
EOF
rm testexe
rm test.cpp