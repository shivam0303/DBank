import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank{
  stable var currentValue: Float = 300;
  // currentValue:=100;

  stable var startTime = Time.now();
  // startTime := Time.now();
  Debug.print(debug_show(startTime));

  public query func showBalance(): async Float{
    return(currentValue);
  };

  public func topUp(amount:Float){
    currentValue+=amount;
    Debug.print(debug_show(currentValue));
  };
  public func withDraw(amount:Float){
    let tempValue:Float = currentValue-amount; 
    
    if(tempValue>=0){
      currentValue-=amount;
      Debug.print(debug_show(currentValue));
    } else{
      Debug.print("Low balance");
    }
  };
  public func compound(){
    let currentTime = Time.now();
    let timeElapsed =  (currentTime - startTime)/1000000000;    
    currentValue := currentValue * (1.0001 ** Float.fromInt(timeElapsed));
    startTime := currentTime;
  };
  // topUp();
}  