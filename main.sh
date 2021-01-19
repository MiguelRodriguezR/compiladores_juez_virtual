echo "#include <iostream>
using namespace std;
int main(int argc, const char*argv[])
{
    float a,b,c;
    a=std::stof(argv[1]);
    b=std::stof(argv[2]);
    c=a+b;
    cout<<"\n"<<a<<"+"<<b<<"="<<c<<endl;
    return 0;
}" > hola.cpp
g++ test.cpp -o testexe
chmod +x testexe
a=1
b=2
./testexe  $a $b
rm ejec
rm hola.cpp