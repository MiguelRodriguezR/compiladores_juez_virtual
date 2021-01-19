echo "#include <stdio.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

int main()
{
    float a,b,c;
    cout<<\"Give 1st number\";
    cin>>a;
    cout<<\"Give 2nd number:\";
    cin>>b;

    c=a+b;
    cout<<a<<\"+\"<<b<<\"=\"<<c<<endl;

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