    # Development & Commit Guidelines                                                                                                                      
                                                                                                                                                           
    ## Step-by-Step Verification & Commits                                                                                                                 

    - After completing each discrete implementation step, milestone, or build task, verify that the code compiles and passes relevant tests.               
    - Do NOT jump directly to the next feature without reporting completion of the current step.                                                           
    - At the end of each completed step, generate and display a structured Git commit message following this exact template:                               
                                                                                                                                                           
    ```git                                                                                                                                                 
    <type>(<scope>): <concise summary in imperative mood>                                                                                                  
                                                                                                                                        
    WHAT:                                                                                                                                                  
    - High-level summary of what was added, modified, or removed.                                                                                          
                                                                                                                                                           
    HOW:                                                                                                                                                   
    - Key implementation details, libraries used, or algorithmic changes.                                                                                  
                                                                                                                                                           
    WHY:                                                                                                                                                   
    - The design rationale, requirement fulfilled, or problem solved by this change.                                                                       

                                                                                                                                                       
  If git commits are automated, pause to show the message and diff summary to the user before proceeding to the next step.

Add to gitignore when building wherever appropriate.
Artifacts generated should be saved in /artifacts upon being approved