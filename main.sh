echo "#include <iostream>
#include <sstream>
#include <string>
using namespace std;
int main(int argc, const char*argv[])
{
    float a,b,c;
    a=std::stof(argv[1]);
    b=std::stof(argv[2]);
    c=a+b;
    cout<<a<<\"+\"<<b<<\"=\"<<c<<endl;
    return 0;
}" > test.cpp
g++ test.cpp -o testexe
chmod +x testexe
a=1
b=2
./testexe  $a $b
rm ejec
rm test.cpp